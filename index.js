// const a = document.querySelector('div')

// const b = d3.select('div')

// console.log('>>>>>>>>>>>>>', a, '$$$$$$$$$$$$$$$$', b)

// get the element with a class name canvas
const canvas = d3.select('.canvas')
    
// use the append method to add an svg element and use method chaining to add attributes
const svg = canvas.append('svg')
    .attr('width', 600)
    .attr('height', 600)

// adding attributes to svg element
// svg.attr('width', 600)
// svg.attr('height', 600)

const group = svg.append('g')
    .attr('transform', 'translate(0, 300)')

// append shapes to svg container

// append a rectangle
group.append('rect')
    .attr('width', 200)
    .attr('height', 100)
    .attr('fill', 'blue')
    .attr('x', 20)
    .attr('y', 20)

// append a circle
group.append('circle')
    .attr('r', 50)
    .attr('cx', 300)
    .attr('cy', 70)
    .attr('fill', 'red')

// append a line
group.append('line')
    .attr('x1', 400)
    .attr('y1', 20)
    .attr('x2', 410)
    .attr('y2', 120)
    .attr('stroke', 'green')
    .attr('stroke-width', 4)

// append a text element in svg format
// svg text is useful when we want to add lable to graphs or axis
svg.append('text')
    .attr('x', 20)
    .attr('y', 200)
    .attr('fill', 'orange')
    .text("Behind Enemy Line")
    // Note!! we can use the style method to apply css style
    .style('font-weight', 800)
    .style('font-family', 'Poppins')

