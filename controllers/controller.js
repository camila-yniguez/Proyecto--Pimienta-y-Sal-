module.exports = {
    menuRender: (req, res)=>{
       
        res.render("detalleMenu")
    },
    mainRender: (req, res)=>{
        res.render("main")
    },
    detalle: (req, res)=>{
        let idPlato = req.params.id;

        res.render("detalle", {idPlato: idPlato})
    }
}