export const getStudents = async (req, res) => {
    try{
        const allStudents=await student.find();
        res.status(200).json(allStudents);
    }catch(e){
        res.status(404).json({message: e.message});
    }
  }  


export const createStudent = async(req, res) => {
    const student = req.body;

    const newStudent = await student(student);
    
    try{
        await newStudent.save();
        res.status(200).json(newStudent);
    }catch(e){
        res.status(404).json({message: e.message});
    }
}