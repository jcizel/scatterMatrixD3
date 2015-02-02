HTMLWidgets.widget({

  name: 'scatterMatrix',

  type: 'output',

  initialize: function(el, width, height) {

    return {
      // TODO: add instance fields as required
    }

  },

  renderValue: function(el, x, instance) {
      data = HTMLWidgets.dataframeToD3( x.data )

      // Modify the underlying scatter-matrix.js script. Originally, the
      // constructor expects the path of the csv file with data.

      var sm = new ScatterMatrix(data, '#'+el.id);
      sm.render()

  },

  resize: function(el, width, height, instance) {

  }

});
