import Driver from "../models/DriverSchema.js";




export const newDriver = async(req, res)=>{

      const {name, vehicle, mobileNumber, DLnumber, branchName   } = req.body;

           
      try {

        if(!name || !vehicle || !mobileNumber || !DLnumber || !branchName){
            return res.status(400).json({
                message : "Please Enter All Fild"
            })
        }
        

       const newDriver = new Driver({
        name, 
        vehicle, 
        mobileNumber, 
        DLnumber, 
        branchName
       })

       await newDriver.save();
       
       res.status(201).json({
          message : "New Driver Register Successfully",
          driver : newDriver
       })
       
      } catch (error) {
        
         res.status(500).json({
          message : "New Driver not Register ",
          Error : error
         })
      }
}






