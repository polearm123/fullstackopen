const lodash = require('lodash')

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
   
    const mappedList = blogs.map(blog => Number(blog.likes))
    const maxNumber = Math.max(...mappedList)
    return blogs.find(blog => blog.likes === maxNumber)
}


//iterate through the blog objects and find who has
//authored the most blogs
const mostBlogs = (blogs) => {
   
    var AuthorList = []
    blogs.forEach(blog => {

       const found = AuthorList.find(author => author.name === blog.author)
       if(found===undefined || AuthorList.length === 0){
            const newAuthor = {
                name:blog.author,
                count:1
            }
            AuthorList.push(newAuthor)
       }else if(found!==undefined){
            const authorIndex = AuthorList.findIndex(authorObject => authorObject.name === found.name)
            AuthorList[authorIndex].count+=1 
       }

    })

    //uses lodash to find the max count in the authorList
    return lodash.maxBy(AuthorList, (author) => {return author.count}).name

}


//returns the name of the author with the blog that has the most likes
const mostLikes = (blogs) => {
    const maxLikes =  lodash.maxBy(blogs, (blog) => {
        return blog.likes})
    return maxLikes.author
}

module.exports = {dummy,totalLikes,favouriteBlog,mostBlogs,mostLikes}