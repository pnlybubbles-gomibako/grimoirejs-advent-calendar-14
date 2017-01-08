const {
  Geometry,
  GeometryFactory,
} = require('grimoirejs-fundamental').default.Geometry;
const {Vector3, AABB} = require('grimoirejs-math').default;

class Ita {
  constructor(div) {
    this.div = div;
    this.offset = 0;
    this.topology = 3;
    this.positions = [];
    this.indices = [];
    this.normals = [];
    this.texCoords = [];
    this.vertices = [];
    this.wireframeIndices = [];
    this.count = 0;
    this.debug = false;
    this.texCoordsMapping = [
      {
        dot: Vector3.YUnit,
        offset: [0.3333, 0.3333],
      }, {
        dot: Vector3.YUnit.negateThis(),
        offset: [0.3333, 0.3333],
      }, {
        dot: Vector3.XUnit,
        offset: [0.6666, 0.3333],
      }, {
        dot: Vector3.XUnit.negateThis(),
        offset: [0.0, 0.3333],
      }, {
        dot: Vector3.ZUnit,
        offset: [0.3333, 0.6666],
      }, {
        dot: Vector3.ZUnit.negateThis(),
        offset: [0.3333, 0.0],
      },
    ];
    this.texUnit = 0.3333;
  }

  debugInit() {
    this.indices_ = [];
    this.positions_ = [];
    this.texCoords_ = [];
    this.div_ = [];
  }

  generate(debug) {
    if (debug) {
      this.debug = true;
      this.debugInit();
    }
    this.cube();
    this.count = this.positions.length / this.topology;
    this.vertices = this.interleave();
    this.wireframeIndices = this.wireframe();
    if (this.debug) {
      this.validate();
      console.log(this.indices_);
      console.log(this.positions_);
      console.log(this.texCoords_);
    }
  }

  interleave() {
    let vertices = [];
    for (let i = 0; i <= this.positions.length / 3; i++) {
      vertices.push(...this.positions.slice(i * 3, (i + 1) * 3).concat(this.normals.slice(i * 3, (i + 1) * 3)).concat(this.texCoords.slice(i * 2, (i + 1) * 2)));
    }
    return vertices;
  }

  wireframe() {
    let indices = [];
    const ic = new Array(3);
    for (let i = 0; i <= this.indices.length - 1; i++) {
      ic[i % 3] = this.indices[i];
      if (i % 3 === 2) {
        const a = ic[0], b = ic[1], c = ic[2];
        indices.push(a, b, b, c, c, a);
      }
    }
    return indices;
  }

  cube() {
    const center = Vector3.Zero;
    const up = Vector3.YUnit;
    const right = Vector3.XUnit;
    const forward = Vector3.ZUnit.negateThis();
    this.offset = 0;
    this.rect(center.subtractWith(forward), up, right, forward.negateThis()); // 手前
    this.rect(center.addWith(forward), up.negateThis(), right, forward); // 奥
    this.rect(center.addWith(up), forward, right, up); // 上
    this.rect(center.subtractWith(up), forward, right.negateThis(), up.negateThis()); // 下
    this.rect(center.addWith(right), forward, up.negateThis(), right); // 右
    this.rect(center.subtractWith(right), forward, up, right.negateThis()); // 左
  }

  rect(center, up, right, forward) {
    const xdiv = Math.abs(this.div.dotWith(right));
    const ydiv = Math.abs(this.div.dotWith(up));
    if (this.debug) { this.div_.push([xdiv,ydiv].toString()); }
    for (let x = 0; x <= xdiv; x++) {
      for (let y = 0; y <= ydiv; y++) {
        const p = center.addWith(right.multiplyWith(2 * x / xdiv - 1).addWith(up.multiplyWith(2 * y / ydiv - 1)));
        this.positions.push(...Array.prototype.slice.call(p.rawElements));
        if (this.debug) { this.positions_.push(Array.prototype.slice.call(p.rawElements).toString() + center.toString() + up.toString() + right.toString()); }
        this.normals.push(...Array.prototype.slice.call(forward.rawElements));
        this.texCoordsMapping.forEach((v) => {
          if (v.dot.dotWith(forward) === 1) {
            let uv;
            if (v.dot.equalWith(Vector3.YUnit.negateThis())) {
              uv = [v.offset[0] + this.texUnit - x * (this.texUnit / xdiv), v.offset[1] + this.texUnit - y * (this.texUnit / ydiv)];
            } else {
              uv = [v.offset[0] + x * (this.texUnit / xdiv), v.offset[1] + this.texUnit - y * (this.texUnit / ydiv)];
            }
            this.texCoords.push(...uv);
            if (this.debug) {this.texCoords_.push(uv.toString() + forward.toString())}
          }
        });
        if (x !== 0 && y !== 0) {
          let poly = [];
          [[-1, -1], [0, -1], [-1, 0], [0, 0], [-1, 0], [0, -1]].forEach((dxdy, i) => {
            this.indices.push(this.coordToIndex(this.offset, x + dxdy[0], y + dxdy[1], up));
            if (this.debug) {
              poly.push(this.coordToIndex(this.offset, x + dxdy[0], y + dxdy[1], up));
              if (poly.length === 3) {
                this.indices_.push(poly.toString());
                poly = [];
              }
            }
          });
        }
      }
    }
    this.offset += (xdiv + 1) * (ydiv + 1);
  }

  coordToIndex(offset, x, y, up) {
    return offset + x * (Math.abs(this.div.dotWith(up)) + 1) + y;
  }

  validate() {
    if (this.positions.length % 3 !== 0) {
      console.error(`position length(${this.positions.length}) is not a multiple of 3.`);
    }
    if (this.normals.length % 3 !== 0) {
      console.error(`normal length(${this.normals.length}) is not a multiple of 3.`);
    }
    if (this.indices.length % this.topology !== 0) {
      console.error(`index length(${this.indices.length}) is not a multiple of topology(${this.topology}).`);
    }
    if (this.texCoords.length % 2 !== 0) {
      console.error(`texCoord length(${this.texCoords.length}) is not a multiple of 2.`);
    }
    if (this.positions.length !== this.normals.length) {
      console.error(`normal length is not match to position length. normal: ${this.normals.length}, position: ${this.positions.length}`);
    }
    if (this.positions.length / 3 !== this.texCoords.length / 2) {
      console.error(`texCoord pair length is not match to position pair length. texCoord: ${this.texCoords.length / 2}, position: ${this.positions.length / 3}`);
    }
    this.indices.forEach((v, idx) => {
      if (isNaN(parseInt(v)) || parseInt(v) !== v) {
        console.error(`index(${v}) is not a integer. in: index[${idx}] (${Math.ceil(idx / this.topology)})`);
      }
      if (v > this.positions.length / 3) {
        console.error(`index(${v}) is out of range. in: index[${idx}] (${Math.ceil(idx / this.topology)})`);
      }
    });
    this.positions.forEach((v, idx) => {
      if (isNaN(parseFloat(v))) {
        console.error(`position(${v}) is not a number. in: position[${idx}] (${Math.ceil(idx / 3)})`);
      }
      if (v > 1.0 || v < -1.0) {
        console.warn(`position(${v}) is out of unit space(-1 < q < 1). in: position[${idx}] (${Math.ceil(idx / 3)})`);
      }
    });
    Array.from({length: this.normals.length / 3}, (v, i) => {
      return this.normals.slice(i * 3, i * 3 + 3);
    }).forEach((v, idx) => {
      const n = new Vector3(v);
      if (Math.abs(n.magnitude - 1) > 0.001) {
        console.warn(`normal(${v.toString()}) is not normalized(${n.magnitude}). in: normal[${idx * 3}..${idx * 3 + 3}] (${idx})`);
      }
    });
    this.texCoords.forEach((v, idx) => {
      if (isNaN(parseFloat(v))) {
        console.error(`texCoord(${v}) is not a number. in: texCoord[${idx}] (${Math.ceil(idx / 2)})`);
      }
      if (v > 1.0 || v < 0) {
        console.warn(`texCoord(${v}) is out of unit space(0 < q < 1). in: texCoord[${idx}] (${Math.ceil(idx / 2)})`);
      }
    });
  }
}

const unitBox = new AABB([new Vector3(-1, -1, -1), new Vector3(1, 1, 1)]);

const primitiveLayout = {
  POSITION: {
    size: 3,
    stride: 32,
  },
  NORMAL: {
    size: 3,
    stride: 32,
    offset: 12,
  },
  TEXCOORD: {
    size: 2,
    stride: 32,
    offset: 24,
  }
};

GeometryFactory.addType("ita", {
  div: {
    converter: 'Vector3',
    defaultValue: '2,2,2',
  },
}, (gl, attrs) => {
  const ita = new Ita(attrs.div);
  ita.generate();
  const geometry = new Geometry(gl);
  geometry.addAttributes(ita.vertices, primitiveLayout);
  geometry.addIndex('default', ita.indices);
  geometry.addIndex('wireframe', ita.wireframeIndices, WebGLRenderingContext.LINES);
  return geometry;
});
