function createCourseRoutes(app){
    app.post("/course/purchase",function(req,res){
    res.json({
        message:"signup endpoint"
    })
})

app.post("/course/preview",function(req,res){
    res.json({
        message:"signup endpoint"
    })
})
}

module.exports{
    createCourseRoutes:createCourseRoutes
}