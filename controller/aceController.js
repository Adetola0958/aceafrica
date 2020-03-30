'use strict'

const Ace = require("../model/ace")
const Hire = require("../model/hire")
const Project = require("../model/project")
const Partner = require("../model/partner")

class App {
    getIndex = (req, res, next) => {
        res.render("index")
    }
    getHire = (req, res, next) => {
        res.render("hire")
    }
    postHireForm = async(req, res, next) => {
        try{
            const{role, total, organizationName, duties} = req.body
            const hirer = new Hire ({
                role : role,
                total : total,
                organizationName : organizationName,
                duties : duties
            })
            const newHirer = await hirer.save()
            if(newHirer) {
                res.render("hire", { title  : "Hirer Congratulations", hirer : hirer })
            }else {
                res.redirect(303, "/hire" ({error : "You have not filled the form correctly"}))
            }
        }catch {
            res.render('/hire' , {error : errors})    
        }
    }
    getAppForm = (req, res, next) => {
        res.render("hire")
    }
    postAppForm = async(req, res, next) => {
        try{
            const{type, target, budget, duration, businessName, location} = req.body
            const project = new Project ({
                type : type,
                target : target,
                budget : budget,
                duration : duration,
                businessName : businessName,
                location : location
            })
            const newApp = await project.save()
            if(newApp) {
                res.render("hire", {title : "congratulations", project : project})
            }else {
                res.redirect(303, "/hire" ({error : "You have not filled the form correctly"}))

            }
        }catch {
            res.render('/hire' , {error : errors})
        }
    }
    getPartners = (req, res, next) => {
        res.render("partners")
    }
    postPartners = async(req, res, next) => {
        try{
            const{organizationName, nature, address, telephone, description} = req.body
            const partner = new Partner ({
                organizationName : organizationName,
                nature : nature,
                address : address,
                telephone : telephone,
                description : description
            })
            const newPartner = await partner.save()
            if(newPartner) {
                res.render("congratulations")
            }else {
                res.redirect(303, "/partners" ({error : "You have not filled the form correctly"})) 
            }
        }catch {
            res.render('/partners' , {error : errors})  
        }
    }
    getApplication = (req, res, next) => {
        res.render("application-form")
    }
}

const returnApp = new App()

module.exports = returnApp