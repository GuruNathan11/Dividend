let router = require('express').Router();

router.get('/',function(req,res){
    res.json({
        status : 'API Works',
        message : "Welcome to Rights API"
    })
});

const users = require('../Model/Models');
const countermodel =require('../Model/Models');
router.post('/add',(req,res) => {
    var user = new users();
    user.companyName = req.body.companyName;
    user.type = req.body.type;
    user.fv = req.body.fv;
    user.percentage = req.body.percentage;
    user.dividendAmount = req.body.dividendAmount
    user.announcement = req.body.announcement;
    user.record = req.body.record;
    user.ex_dividend = req.body.ex_dividend;
  
    user.save((err,users) => {
        if(err) {
            return res.status(400).send({
                status: "Check the company if already exists",
                message : err
            });
        }
        else {
            return res.status(201).send({
                message : "Dividend added successfully",
                data : user
            });
        }
    })
});

var Controller = require('../Controller/Controller.js');

router.route('/get-all')
.get(Controller.index)

router.route('/:user_id')
.get(Controller.view)
.patch(Controller.update)
.put(Controller.update)
.delete(Controller.Delete)

router.route('/del-all')
.post(Controller.delall)

module.exports = router;