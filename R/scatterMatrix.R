#' D3 scatterplot matrix
#'
#' This is a wrapper around the D3 scatterplot matrix, originally developed by
#' Mike Bostock and extended by Benjie Chen.
#' @param data data.frame containing the data  
#' @param width 
#' @param height 
#' @import htmlwidgets
#' @export
scatterMatrix <- function(
    data = NULL,
    width = NULL, height = NULL
){
    if (!inherits(data,'data.frame'))
        stop("`data` must be a data.frame")
    
  # forward options using x
  x = list(
      data = data
  )

  # create widget
  htmlwidgets::createWidget(
    name = 'scatterMatrix',
    x,
    width = width,
    height = height,
    package = 'scatterMatrixdD3'
  )
}

#' Widget output function for use in Shiny
#'
#' @export
scatterMatrixOutput <- function(outputId, width = '100%', height = '400px'){
  shinyWidgetOutput(outputId, 'scatterMatrix', width, height, package = 'scatterMatrixdD3')
}

#' Widget render function for use in Shiny
#'
#' @export
renderScatterMatrix <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  shinyRenderWidget(expr, scatterMatrixOutput, env, quoted = TRUE)
}

## scatterMatrix(data = iris)
