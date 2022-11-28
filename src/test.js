let chai=require("chai");
let chaiHttp=require("chai-http");
let server=require("./app");
let { expect } = require("chai");
const { listeners } = require("./app");
chai.should();
chai.use(chaiHttp);

describe("Get/Index",()=>{

    it("it should display landing page",(done)=>{
        chai.request(server)
            .get("/")
            .end((err,res)=>{
                res.should.have.status(200);
                done();
            });
    });
});



describe("Get/anyOtherPage",()=>{

    it("it should display error message: resource not found",(done)=>{
        chai.request(server)
            .get("/anyotherpage")
            .end((err,res)=>{
                res.should.have.status(404);
                done();
            });
    });
});
