const gr = require('grimoirejs').default;

let $ = null;

const EPS = Math.pow(10, -5);

gr(() => {
  $ = gr('#canvas');
  const stats = new Stats();
  stats.showPanel(0);
  stats.dom.setAttribute('class', 'st');
  document.body.appendChild(stats.dom);
  $('goml').first().getComponent('LoopManager').register((i) => {
    stats.begin();
  }, -100000000);
  $('goml').first().getComponent('LoopManager').register((i) => {
    stats.end();
  }, 100000000);
  const gui = new dat.GUI();
  const general = new General();
  gui.add(general, 'axis');
  gui.add(general, 'wireframe');
  gui.add(general, 'capture');
  const mageru = new Mageru();
  const f1 = gui.addFolder('Mageru');
  f1.add(mageru, 'radius', -1, 1).listen();
  f1.add(mageru, 'coef', 0, 1);
  f1.add(mageru, 'animation');
  f1.open();
});

class General {
  constructor() {
    this._axis = true;
    this._wireframe = true;
  }

  set axis(v) {
    this._axis = v;
    $('#axis').setAttribute('scale', this._axis ? 1 : 0);
  }

  get axis() {
    return this._axis;
  }

  set wireframe(v) {
    this._wireframe = v;
    $('.ita').setAttribute('targetBuffer', this._wireframe ? 'wireframe' : 'default');
  }

  get wireframe() {
    return this._wireframe;
  }

  capture() {
    const dataUrl = document.querySelector('#app canvas').toDataURL();
    const a = document.createElement('a');
    a.href = dataUrl;
    a.style.display = 'none';
    a.setAttribute('download', `capture_${+new Date()}.png`)
    document.body.appendChild(a);
    a.click();
    a.remove();
  }
}

class Mageru {
  constructor() {
    this._coef = 0.13;
    this._radius = 0.5;
    this.frame = 0;
    this._animation = false;
  }

  set coef(v) {
    this._coef = v;
    $('#mageru').setAttribute('coef', v);
  }

  get coef() {
    return this._coef;
  }

  set radius(v) {
    this._radius = v;
    let r = 1 / v;
    if (r > 1 / EPS) { r = 1 / EPS } else if (r < -1 / EPS) { r = -1 / EPS }
    $('#mageru').setAttribute('radius', r);
  }

  get radius() {
    return this._radius;
  }

  animate() {
    this.frame += 1;
    console.log(Math.cos(this.frame * Math.PI / 180 * 3));
    this.radius = Math.cos(this.frame * Math.PI / 180 * 3);
    if (this._animation) {
      requestAnimationFrame(this.animate.bind(this));
    }
  }

  set animation(v) {
    this._animation = v;
    if (v) {
      requestAnimationFrame(this.animate.bind(this));
    }
  }

  get animation() {
    return this._animation;
  }
}
