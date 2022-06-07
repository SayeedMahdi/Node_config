const errMiddle = (err, req, res, next) => {
    console.log(res.stateCode);
    const state=res.stateCode ? res.stateCode:500;
    res.status(state);
    res.json({
      message:err.message  
    })

};
module.exports={
    errMiddle
}