

export const validate = {
    userId:{
notEmpty:{
    errorMessage:"User ID not defined"
}
    },
   
  Name: {
    notEmpty: {
      errorMessage: "Name is required"
    },
    isString: {
      errorMessage: "Name must be a string"
    },
    matches: {
      options: [/^[A-Za-z ]+$/],  
      errorMessage: "Name must contain only alphabets"
    }
  },

  phone: {
    notEmpty: {
      errorMessage: "Phone number is required"
    },
    isNumeric: {
      errorMessage: "Phone must contain only numbers"
    },
    isLength: {
      options: { min: 10, max: 10 },
      errorMessage: "Phone must be exactly 10 digits"
    }
  },

  Address: {
    notEmpty: {
      errorMessage: "Address is required"
    },
    isString: {
      errorMessage: "Address must be a string"
    }
  }
};

