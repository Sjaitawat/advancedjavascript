    
const student = [
    {
        roll : 1,
        name:"st1",
        course:"btech"
        
    },
    {
        roll : 2,
        name:"st2",
        course:"bsc"
    },
    {
        roll : 3,
        name:"st3",
        course:"barch"
    }
    
]
function getstudent()
{
    setTimeout(() =>{
        let displaystudent = ""
    student.forEach((student) => {
        console.log(student.name)
    })   
    },1000 )
}

function createstudent(newstudent){
    return new Promise(
        (resolve,reject) => {
            setTimeout(() => {
                student.push(newstudent);
                getstudent();
                let flag = true;
                if(flag){
                    resolve();
                }
                else{
                    reject("problem occured")
                }
            },5000)
        })
}

createstudent({roll:4,name:"st4",course:"ba"},getstudent);
