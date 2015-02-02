HTMLWidgets.widget({

  name: 'scatterMatrix',

  type: 'output',

  initialize: function(el, width, height) {

    return {
      // TODO: add instance fields as required
    }

  },

  renderValue: function(el, x, instance) {
      var data = HTMLWidgets.dataframeToD3( x.data )

      // Modify the underlying scatter-matrix.js script. Originally, the
      // constructor expects the path of the csv file with data.
     
      // When used in Shiny, each regeneration of the plot currently adds a new
      // div element. Below is an attempt to remove a scatter-matrix-container,
      // if it already exists. In tests so far it doesn't seem to work...
      d3.selectAll("scatter-matrix-container").remove();
      instance.sm = new ScatterMatrix(data, '#'+el.id);
      instance.sm.render();

  },

  resize: function(el, width, height, instance) {

  }

});
