
var Grid = {

  'obj' : null,
  'size' : null,

  'textShapes' : null,
  'textGeo'    : null,

  'coordTxt'   : null,

  'minDistView' : null,

  'visible' : true,

  'fixed' : false,

  /**
   * Create 2 base grid scaled on Elite: Dangerous grid
   */

  'init' : function(size, color, minDistView) {

    this.size = size;

    this.obj = new THREE.GridHelper(1000000, size);
    this.obj.setColors(color, color);
    this.obj.minDistView = minDistView;

    scene.add(this.obj);

    this.obj.customUpdateCallback = this.addCoords;


    return this;
  },

  /**
   * Create 2 base grid scaled on Elite: Dangerous grid
   */

  'infos' : function(step, color, minDistView) {

    var size = 50000;
    if(step== undefined) step = 10000;
    this.fixed = true;

    //-- Add global grid

    var geometry = new THREE.Geometry();
    var material = new THREE.LineBasicMaterial( {
      color: 0x555555,
      transparent: true,
      opacity: 0.2,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    } );

    for ( var i = - size; i <= size; i += step ) {

        geometry.vertices.push( new THREE.Vector3( - size, 0, i ) );
        geometry.vertices.push( new THREE.Vector3(   size, 0, i ) );

        geometry.vertices.push( new THREE.Vector3( i, 0, - size ) );
        geometry.vertices.push( new THREE.Vector3( i, 0,   size ) );

    }

    this.obj = new THREE.LineSegments( geometry, material );
    this.obj.position.set(0,0,-20000);

    //-- Add quadrant

    var quadrant = new THREE.Geometry();
    var material = new THREE.LineBasicMaterial( {
      color: 0x888888,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    } );

    quadrant.vertices.push( new THREE.Vector3( - size, 0, 20000 ) );
    quadrant.vertices.push( new THREE.Vector3(   size, 0, 20000 ) );

    quadrant.vertices.push( new THREE.Vector3( 0, 0, - size ) );
    quadrant.vertices.push( new THREE.Vector3( 0, 0,   size ) );
    var quadrantL = new THREE.LineSegments( quadrant, material );


    this.obj.add(quadrantL);


    //-- Add grid to the scene

    scene.add(this.obj);

    return this;
  },

  'addCoords' : function() {



  },

  /**
   * Toggle grid view
   */
  'toggleGrid' : function() {

    this.visible = !this.visible;

    if(this.size < 10000 && isFarView) return;
    this.obj.visible = this.visible;

  },

  /**
   * Show grid
   */
  'show' : function() {

    if(!this.visible) return;

    this.obj.visible = true;

  },

  /**
   * Hide grid
   */
  'hide' : function() {

    this.obj.visible = false;

  }

}

