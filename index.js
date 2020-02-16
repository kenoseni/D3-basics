// const a = document.querySelector('div')

// const b = d3.select('div')

// console.log('>>>>>>>>>>>>>', a, '$$$$$$$$$$$$$$$$', b)

const data = [
    {
        'width': 200,
        'height': 100,
        'fill': 'orange'
    },
    {
        'width': 100,
        'height': 60,
        'fill': 'red'
    },
    {
        'width': 50,
        'height': 30,
        'fill': 'green'
    }
]

// get the element with a class name canvas
const canvas = d3.select('.canvas')
    
// use the append method to add an svg element and use method chaining to add attributes
const svg = canvas.append('svg')
    .attr('width', 600)
    .attr('height', 600)

svg.append('rect')


// next we join the data array with the rect element

// const rect = svg.select('rect')
//     .data(data)
//     .attr('width', val => val.width )
//     .attr('height', val => val.height )
//     .attr('fill', function(val) { return val.fill })

// Join data to rects
const rects = svg.selectAll('rect')
    .data(data)

// updating the elements already in the DOM
rects.attr('width', val => val.width )
    .attr('height', val => val.height )
    .attr('fill', function(val) { return val.fill })


// updating elements that have not yet enter the DOM
rects.enter()
    .append('rect')
    .attr('width', val => val.width )
    .attr('height', val => val.height )
    .attr('fill', function(val) { return val.fill })


// adding attributes to svg element
// svg.attr('width', 600)
// svg.attr('height', 600)

// const group = svg.append('g')
//     .attr('transform', 'translate(0, 300)')

// append shapes to svg container

// append a rectangle
// group.append('rect')
//     .attr('width', 200)
//     .attr('height', 100)
//     .attr('fill', 'blue')
//     .attr('x', 20)
//     .attr('y', 20)

// // append a circle
// group.append('circle')
//     .attr('r', 50)
//     .attr('cx', 300)
//     .attr('cy', 70)
//     .attr('fill', 'red')

// // append a line
// group.append('line')
//     .attr('x1', 400)
//     .attr('y1', 20)
//     .attr('x2', 410)
//     .attr('y2', 120)
//     .attr('stroke', 'green')
//     .attr('stroke-width', 4)

// append a text element in svg format
// svg text is useful when we want to add lable to graphs or axis
// svg.append('text')
//     .attr('x', 20)
//     .attr('y', 200)
//     .attr('fill', 'orange')
//     .text("Behind Enemy Line")
//     // Note!! we can use the style method to apply css style
//     .style('font-weight', 800)
//     .style('font-family', 'Poppins')

