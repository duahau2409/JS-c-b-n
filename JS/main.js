/*
var depthArray = [1,2,[3,4],5,[6,7,8]];

var flatArray = depthArray.reduce(function(flatOutput,depthItem) {
    return flatOutput.concat(depthItem);
}, []);
// console.log(flatArray);

var topics = [
    {
        topic: 'Font-end',
        courses: [
            {
                id: 1,
                name: 'HTML, CSS'
            },
            {
                id: 2,
                name: 'JAVA'
            }
        ]
    },
    {
        topic: 'Back-end',
        courses: [
            {
                id: 3,
                name: 'PHP'
            },
            {
                id: 4,
                name: 'NodeJS'
            }
        ]
    }
];

var newCourse = topics.reduce(function(courses,topic) {
    return courses.concat(topic.courses);
}, []);

console.log(newCourse);
*/

/* bai 84 (Get element methods) Phan DOM
//var headingNode = document.getElementById('heading'); chi select duoc thang dau tien
//var headingNode = document.getElementsByTagName('h2'); lay nodelist var headingNode = document.getElementsByTagName('h2')[0]; lay element dau tien
//var headingNodes = document.getElementsByClassName('heading');  tinh chat giong cai mang chỉ khong dùng dduocj map(), filter...
//var headingNode = document.querySelector('.heading');  css selector kieu gi thi cai nay dung y vay
//var headingNodes = document.querySelectorAll('.heading'); tinh chat giong cai mang chỉ khong dùng dduocj map(), filter...
//console.log(document.forms); HTML collection console.log(document.forms[truyen so vao]); console.log(document.forms. ...);
console.log(headingNode)
*/

/* bai 85 (Get element methods-2)
var listItemNodes = document.querySelector('.box1')
console.log(listItemNodes)
console.log(listItemNodes.querySelectorAll('li'));
*/

/* bai 88 dom attribute node
 var headingElement = document.querySelector('h2');
 headingElement.title = 'Head'; // them attribute vao 1 element
 headingElement.setAttribute('class', 'Head') // them attribute vao 1 element
console.log( headingElement.getAttribute('class'))
*/

/* bai 89 dom innerHTML vs outerHTML
var boxElement = document.querySelector('.heading')
boxElement.innerHTML = '<h1 title ="Name">Nguyen Van Luat</h1>'
// console.log(document.querySelector('h1').innerHTML)
console.log(boxElement.innerHTML)
console.log(boxElement.outerHTML)*/

/* bai 90 properties Node DOM  bài này có rất nhiều thuộc tính để học*/
 
/* bai 91 DOM CSS
var boxElement = document.querySelector('.box')
// boxElement.style.width = '100px';
// boxElement.style.height = '100px';
// boxElement.style.backgroundColor = 'pink';
Object.assign(boxElement.style, {
    width: '100px',
    height: '100px',
    backgroundColor: 'pink'
})
console.log(boxElement.style.width);
*/
/* bai 92 DOM ClasList Property
var boxElement = document.querySelector('.box')
// console.log(boxElement.classList.value)
boxElement.classList.add('red')
console.log(boxElement.classList.contains('red'))
boxElement.classList.remove('red')
*/
/* Bai 93 DOM event

var h1Element = document.querySelector('h1');
h1Element.onclick = function() {
    console.log(Math.random());
}
*/
/* Bai 94 DOM event example
var inputElement = document.querySelector('input[type="text"]');
// var checkBoxElement = document.querySelector('input[type="checkbox"]');
// var valueElement = document.querySelector('select');
// inputElement.onchange = function(e) {
//     console.log(e.target.value);
// }

// inputElement.oncinput = function(e) {
//     inputValue = e.target.value;
// }
// checkBoxElement.onchange = function(e) {
//     console.log(e.target.checked);
// }

// valueElement.onchange = function(e) {
//     console.log(e.target.value)
// }

inputElement.onkeyup = function(e) {
    console.log(e.target.value)
}
*/

/* Bai 95 preventDefault and StopPropagation 


// var aElements = document.links;
// for(var i=0;i<aElements.length;++i)
// {
//     aElements[i].onclick = function(e)
//     {
//         // console.log(e.target.href)
//         if(!e.target.href.startsWith('https://www.google.com/')) {
//             e.preventDefault();
//         }
//     }
// }

document.querySelector('div').onclick = 
    function(e) {
        console.log('div');
    }

document.querySelector('button').onclick = 
    function(e) {
        e.stopPropagation(); // tranh bị nổi bọt
        console.log('click me'); 
    }
*/

/*bài 96 Event listener


var btn = document.getElementById('btn');

// setTimeout(function () {
//     btn.onclick = function() {
//         console.log('viec 1');
//         console.log('viec 2');
//         alert('viec 3');
//     }
// }, 3000);

// btn.addEventListener('click', function(e) {
//     console.log(Math.random());
// })

function viec1() {
    console.log('viec 1');
}
btn.addEventListener('click', viec1);
setTimeout(function () {
    btn.removeEventListener('click', viec1);
},3000)
*/

/* bai 101 promies(concept)

var promise = new Promise(
    // Executor
    function(resolve, reject) {
        // logic
        //thành công: resolve()
        // thất bại: reject()
        resolve();
    }
);

promise
    .then(function() {
        console.log('Thành công')
    })
    .catch(function() {
        console.log('Thất bại')

    })
    .finally(function() {
        console.log('Hoàn thành')
    });
*/ 
/* bai 101 promies(chain)

var promise = new Promise(
    // Executor
    function(resolve, reject) {
        // logic
        //thành công: resolve()
        // thất bại: reject()
        resolve();
    }
);

promise
    .then(function() {
        return 1;
    })
    .then(function(data) {
        console.log(data)
    })
    .then(function() {
        console.log(3)
    })
    .then(function() {
        console.log(4)
    })
    .catch(function() {
        console.log('Thất bại')

    })
    .finally(function() {
        console.log('Hoàn thành')
    });
    còn thiếu trường hợp setTimeOut
*/

/* bai 103 Promise methods (resolve, reject, all)

// var promise = new Promise(
//     // Executor
//     function(resolve, reject) {
//         // logic
//         //thành công: resolve()
//         // thất bại: reject()
//         resolve();
//     }
// );

// promise 
//     .then(function (result) {
//         console.log('result', result);
//     })
//     .catch(function(err) {
//         console.log(err);
//     })

var promie1 = new Promise(
    function(resolve) {
        setTimeout(function() {
            resolve([1]);
        },2000);
    }
);

var promie2 = new Promise(
    function(resolve) {
        setTimeout(function() {
            resolve([2,3]);
        },3000);
    }
)

Promise.all([promie1,promie2])
    .then(function(result) {
        // console.log(result);
        var result1 = result[0];
        var result2 = result[1];
        console.log(result1.concat(result2));
    });
*/

/* bai 104 Promise example 
var users = [
    {
        id: 1,
        name: 'Kien Dam'
    },
    {
        id: 2,
        name: 'Son Dang'
    },
    {
        id: 3,
        name: 'Hung Dam'
    }
];

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Anh Son chua ra video :('
    },
    {
        id: 2,
        user_id: 2,
        content: 'Vua ra xong em oi'
    },
    {
        id: 3,
        user_id: 1,
        content: 'Cam on anh nhe'
    },
]

// Fake API
function getComments() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(comments);
        },1000);
    });
}
function getUsersByIds(userIDs) {
    return new Promise(function(resolve) {
        var result = users.filter(function(user) {
            return userIDs.includes(user.id)
        });
        setTimeout(function() {
            resolve(result);
        }, 1000);
    }, 1000);
}
getComments()
    .then(async function(comments) {
        // console.log(comments);
        var userIDs = comments.map(function(comment) {
            return comment.user_id;
        });
        
        const users = await getUsersByIds(userIDs);
        return {
            users: users,
            comments: comments,
        };
    })
    .then(function(data) {
        // console.log(data);
        var commentBlock = document.getElementById('comment-block');

        var html = '';
        data.comments.forEach(function(comment) {
            var user = data.users.find(function(user) {
                return user.id === comment.user_id;
            });
            html += `<li>${user.name}: ${comment.content}</li>`;
        });

        commentBlock.innerHTML = html;
    });
*/

/* 
var postApi = 'https://jsonplaceholder.typicode.com/posts';


fetch(postApi)
    .then(function(response) {
        return response.json();
        // JSON.parse: JSON -> JS types
    })
    .then(function(posts) {
        var htmls = posts.map(function(post) {
            return `<li>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
                </li>`;
        });
        var html = htmls.join('');
        document.getElementById('post-block').innerHTML = html;
    })
    .catch(function(err) {
        console.log("có lỗi!");
    })
*/

/* bai 106 JSON Server 
var courseApi = 'http://localhost:3000/courses';
fetch(courseApi)
    .then(function(response) {
        return response.json();
    })
    .then(function(courses) {
        console.log(courses);
    })
*/

/* bai 107 JSON Server */


/* bai 108 Thêm/sửa/xóa khóa học với Fetch và REST API */

var courseApi = 'http://localhost:3000/courses';

function start() {
    getCourses(renderCourses);

    handleCreateForm();
   
}

start();

// funtion
function getCourses(callback) {
    fetch(courseApi)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function createCourses(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(courseApi, options) 
        .then(function(response) {
            response.json();
        })
        .then(callback);
}
function handleDeleteCourse(id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    fetch(courseApi + '/' +id, options) 
        .then(function(response) {
            response.json();
        })
        .then(function() {
            var courseItem = document.querySelector('.course-item-'+ id)
            if(courseItem) {
                courseItem.remove();
            }
        });
}

function renderCourses(courses) {
    var listCoursesBlock = document.querySelector('#list-course');
    var htmls = courses.map(function(course) {
        return `
        <li class="course-item-${course.id}">
            <h4>${course.name}</h4>
            <button onclick="handleDeleteCourse(${course.id})">Xóa</button>
        </li>`
    })
    listCoursesBlock.innerHTML = htmls.join('');
}

function handleCreateForm() {
    var createBtn = document.querySelector('#create');

    createBtn.onclick = function() {
        var name = document.querySelector('input[name = "name"]').value;
        
        var formData = {
            name: name,
        };
        createCourses(formData, function() {
            getCourses(renderCourses);
        });
    }
}