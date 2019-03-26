/**
 * Fetches data from .csv files and returns them just like Tabletop
 */
var Procsv = {
  // Recursive function that loads the contents of csv files one after the other,
  // and calls the callback function when all tabs are loaded
  load: function load(options) {
    t = options.tabs.shift();
    if (!t) {
      options.callback();
    } else {
      $.ajax({
        url: 'csv/' + t + '.csv',
        type: 'get',
        dataType: 'text',
        success: function(data) {
          options.self[t] = $.csv.toObjects(data);
          load(options);
        },
        error: function() {
          alert('Error: Could not load ' + t + ' sheet');
        }
      });
    }
  },

  // Returns an object with contents of the requested tab (sheet)
  sheets: function(sheet) {
    return {'elements': this[sheet]};
  }
};
