// const a = document.querySelector('div')

// const b = d3.select('div')

// console.log('>>>>>>>>>>>>>', a, '$$$$$$$$$$$$$$$$', b)

// const data = [
//     {
//         'width': 200,
//         'height': 100,
//         'fill': 'orange'
//     },
//     {
//         'width': 100,
//         'height': 60,
//         'fill': 'red'
//     },
//     {
//         'width': 50,
//         'height': 30,
//         'fill': 'green'
//     }
// ]

// get the element with a class name canvas
const canvas = d3.select('.canvas')
    
// use the append method to add an svg element and use method chaining to add attributes
const svg = canvas.append('svg')
    .attr('width', 600)
    .attr('height', 600)
    

// get json data
// d3.json("planets.json").then(data => {

//     const circles = svg.selectAll('circle')
//         .data(data)

//     // add attr to circles already in the DOM
//     circles.attr('cx', val => val.distance)
//         .attr('cy', 200)
//         .attr('r', val => val.radius)
//         .attr('fill', val => val.fill)

//     // add attr to circles not already in the DOM
//     circles.enter()
//         .append('circle')
//             .attr('cx', val => val.distance)
//             .attr('cy', 200)
//             .attr('r', val => val.radius)
//             .attr('fill', val => val.fill)
// })

svg.append('rect')

// create margins and dimension
const margin = {
    top: 20,
    right: 20,
    bottom: 100,
    left: 100
}
const graphWidth = 600 - margin.right - margin.left
const graphHeight = 600 - margin.top - margin.bottom

const graph = svg.append('g')
    .attr('width', graphWidth)
    .attr('height', graphHeight)
    .attr('transform', `translate(${margin.left}, ${margin.top})`) // moves it into the svg

const xAxisGroup = graph.append('g')
    .attr('transform', `translate(0, ${graphHeight})`)


const yAxisGroup = graph.append('g')


// Create bar chart
db.collection('dishes').get().then(res => {

    var data = []
    
    res.forEach(doc => {
        data.push(doc.data())
    })

    const max = d3.max(data, val => val.orders)

    // create linear scale
    const y = d3.scaleLinear()
        .domain([0, max])
        .range([graphHeight, 0])

    // const min = d3.min(data, val => val.orders)
    // const max = d3.max(data, val => val.orders)

    // const extent = d3.extent(data, val => val.orders)

    // create band scale
    const x = d3.scaleBand()
        .domain(data.map(item => item.name))
        .range([0, 500])
        .paddingInner(0.2)
        .paddingOuter(0.2)
    
    // join the data to rects
    const rects = graph.selectAll('rects')
        .data(data)
    
    // add attr to rect already in the DOM
    rects.attr('width', x.bandwidth)
        .attr('height', val => graphHeight - y(val.orders))
        .attr('fill', 'red')
        .attr('x', val => x(val.name))
        .attr('y', val => y(val.orders))

    // add attr to rect not already in the DOM
    rects.enter()
        .append('rect')
            .attr('width', x.bandwidth)
            .attr('height', val => graphHeight - y(val.orders))
            .attr('fill', 'red')
            .attr('x', val => x(val.name))
            .attr('y', val => y(val.orders))
    
    // create and call the axis
    const xAxis = d3.axisBottom(x)
    const yAxis = d3.axisLeft(y)
        .ticks(3)
        .tickFormat(axisValue => axisValue + ' orders')

    // applying the axis so that they can be visible
    xAxisGroup.call(xAxis)
    yAxisGroup.call(yAxis)

    xAxisGroup.selectAll('text')
        .attr('transform', 'rotate(-40)')
        .attr('text-anchor', 'end')
        .attr('fill', 'red')
    
    yAxisGroup.selectAll('text').attr('fill', 'red')
    
    
}).catch((err) => err)


// next we join the data array with the rect element

// const rect = svg.select('rect')
//     .data(data)
//     .attr('width', val => val.width )
//     .attr('height', val => val.height )
//     .attr('fill', function(val) { return val.fill })

// Join data to rects
// const rects = svg.selectAll('rect')
//     .data(data)

// updating the elements already in the DOM
// rects.attr('width', val => val.width )
//     .attr('height', val => val.height )
//     .attr('fill', function(val) { return val.fill })


// updating elements that have not yet enter the DOM
// rects.enter()
//     .append('rect')
//     .attr('width', val => val.width )
//     .attr('height', val => val.height )
//     .attr('fill', function(val) { return val.fill })


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
