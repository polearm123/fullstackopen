const dummy = (blogs) => {
    return 1

}

const totalLikes = (blogs) => {
    
    const reducer = (sum,item) => {
        return sum+item.likes
    }
   
    return blogs.length === 0 ? 0 : blogs.reduce(reducer,0)
}

const favouriteBlog = (blogs) => {
    //finds maxLikes by mapping blogs array of numbers and finding max
    //then finds the blog with exactly that many likes

    // const maxLikes = Math.max(blogs.map(blog => {
    //     return blog.likes
    // }))
    const mappedList = blogs.map(blog => Number(blog.likes))
    const maxNumber = Math.max(...mappedList)
    return blogs.find(blog => blog.likes === maxNumber)
}

module.exports = {dummy,totalLikes,favouriteBlog}