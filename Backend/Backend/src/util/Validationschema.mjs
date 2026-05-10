

export const createUserValisdationSchema={

  username:{
notEmpty:{
  
  errorMessage:"User name must be non empty"
},
isString:{
  errorMessage:"username must be in string format"
}
  },
    email:{
notEmpty:{
errorMessage:"email must be non empty"
        },
     
        isString:{
            errorMessage:"Username must be in string format"
        }
      
    },
    password:{
        notEmpty:{
errorMessage:"password must be non empty"
        }
    }
}


/* db.createCollection(
  "cardss",{
    validator:{
      $jsonSchema:{
        bsonType:"object",
        required:["item","price","customerId"],
        properties:{
          item:{
            bsonType:"string",
            description:"This is an name field required"
          },
          price:{
            bsonType:"number",
            description:"This is number field required"
          },
          customerId:{
            bsonType:"objectId",
            description:"this is an another collection id "
          }
        }
      }
    }
  }
) */


/* 
  db.cardss.aggregate([
  {
    $lookup:{
      from:"courses",
      localField:"custromerId",
      foreignField:"_id",
      as:"customer"
    }
  }
]) */
/*  */