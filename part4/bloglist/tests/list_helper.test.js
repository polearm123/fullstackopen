const helper = require('../utils/list_helper')

describe('dummy function' , () => {
    test('dummy test returns one' , ()=>{
        const blogs = []
        const result = helper.dummy(blogs)
        expect(result).toBe(1)
    })
})


describe('total likes' , () => {
    const listWithOneBlog = [
        {
          _id: '5a422aa71b54a676234d17f8',
          title: 'Go To Statement Considered Harmful',
          author: 'Edsger W. Dijkstra',
          url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
          likes: 5,
          __v: 0
        }
      ]
      test('when list has only one blog the total likes are the number of likes in that one blog' , () => {
          const result = helper.totalLikes(listWithOneBlog)
          expect(result).toBe(5)
      })
})

describe('favourite Blog', () => {
    const listWithBlogs = [{
        _id: '5a422aa71b54a676234d17f8',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 1,
        __v: 0
      },
      {
        _id: '5a422aa71b54a676234d17f7',
        title: 'Not my problem',
        author: 'Mr Allan Turing',
        url: 'http://www.u.MrTuringCreations.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 10,
        __v: 0
      },
      {
        _id: '5a422aa71b54a676234d17f12',
        title: 'Creationist',
        author: 'Good day to you sir',
        url: 'http://www.u.MRCreationIst.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 25,
        __v: 0
      },
      {
        _id: '5a422aa71b54a676234d17f10',
        title: 'Creationist',
        author: 'Good day to you sir',
        url: 'http://www.u.dad.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 20,
        __v: 0
      },
      {
        _id: '5a422aa71b54a676234d17f11',
        title: 'Creationist',
        author: 'Good day to you sir',
        url: 'http://www.u.da112.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 20,
        __v: 0
      }
      
    ]

    test('when the list is larger the favourite blog is the one with the highest number of likes', ()=>{
        const result = helper.favouriteBlog(listWithBlogs)._id
        expect(result).toBe("5a422aa71b54a676234d17f12")
    })
})

describe('test for the author with the most blogs' , () => {
  const listWithBlogs = [{
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 1,
    __v: 0
  },
  {
    _id: '5a422aa71b54a676234d17f7',
    title: 'Not my problem',
    author: 'Mr Allan Turing',
    url: 'http://www.u.MrTuringCreations.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 50,
    __v: 0
  },
  {
    _id: '5a422aa71b54a676234d17f12',
    title: 'Creationist',
    author: 'Good day to you sir',
    url: 'http://www.u.MRCreationIst.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 20,
    __v: 0
  },
  {
    _id: '5a422aa71b54a676234d17f10',
    title: 'Creationist',
    author: 'Good day to you sir',
    url: 'http://www.u.dad.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 20,
    __v: 0
  },
  {
    _id: '5a422aa71b54a676234d17f11',
    title: 'Creationist',
    author: 'Good day to you sir',
    url: 'http://www.u.da112.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 20,
    __v: 0
  }
  
]

  test('the author with the most blogs is', () => {
    const result = helper.mostBlogs(listWithBlogs)
    expect(result).toBe('Good day to you sir')
  }

)})

describe('test for the author with the most likes' , () => {
  const listWithBlogs = [{
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 1,
    __v: 0
  },
  {
    _id: '5a422aa71b54a676234d17f7',
    title: 'Not my problem',
    author: 'Mr Allan Turing',
    url: 'http://www.u.MrTuringCreations.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 50,
    __v: 0
  },
  {
    _id: '5a422aa71b54a676234d17f12',
    title: 'Creationist',
    author: 'Good day to you sir',
    url: 'http://www.u.MRCreationIst.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 20,
    __v: 0
  },
  {
    _id: '5a422aa71b54a676234d17f10',
    title: 'Creationist',
    author: 'Good day to you sir',
    url: 'http://www.u.dad.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 20,
    __v: 0
  },
  {
    _id: '5a422aa71b54a676234d17f11',
    title: 'Creationist',
    author: 'Good day to you sir',
    url: 'http://www.u.da112.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 20,
    __v: 0
  }
  
]

  test('the author with the most blogs is', () => {
    const result = helper.mostLikes(listWithBlogs)
    expect(result).toBe('Mr Allan Turing')
  }

)})
