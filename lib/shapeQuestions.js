const specificShape = function(answer){
    let shape = answer.shape;
    if(shape === "circle"){
       return [{
           type:'input',
           name:'height',
           message:'What is the specific height would you like to include in your circular logo?'
       },{
           type:'input',
           name:'width',
           message:'What is the specific width would you like to include in your circular logo?'   
       },{
           type:'input',
           name:'radius',
           message:'What is the specific height would you like to include in your circular logo?'
       },{
           type:'input',
           name:'cx',
           message:'What is the specific cx(x-axe) would you like to include in your circular logo?'
       },{
           type:'input',
           name:'cy',
           message:'What is the specific cy(y-axe) would you like to include in your circular logo?'
       },{
           type:'input',
           name:'shapeColor',
           message:'What background-color would you like to include in your circular logo?'
       }];
    } else if(shape === "triangle"){
       return [{
           type:'input',
           name:'height',
           message:'What height would you like to include in your triangular logo?'  
       },{
           type:'input',
           name:'width',
           message:'What width would you like to include in your triangular logo?' 
       },{
           type:'input',
           name:'points',
           message:'What points would you like to assign to your triangular logo?' 
       },{
           type:'input',
           name:'shapeColor',
           message:'What background-color would you like to include in your triangular logo?'   
       }]
    } else if(shape === "square"){
        return [{
            type:'input',
            name:'width',
            message:'what width would you like to include in your SVG container?'            
        },
        {
            type:'input',
            name:'height',
            message:'what height would you like to include in your SVG container?'    
        },
        {
            type:'input',
            name:'width2',
            message:'what width would you like to include in your squared logo?' 
        },
        {
            type:'input',
            name:'height2',
            message:'what width would you like to include in your squared logo?' 
        },
        {
            type:'input',
            name:'x',
            message:'what x (x-position for the top-left corner) would you like to include in your squared logo?' 
        },
        {
            type:'input',
            name:'y',
            message:'what y (y-position for the top-left corner) would you like to include in your squared logo?' 
        }]
    }
   }
   
   questions.push({
       type:'input',
       name:"shapeQuestions",
       message:'answer the following questions:',
       when:(answers)=> answers.shape !== undefined,
       transformer:(answers) => specificShape(answers)
   });