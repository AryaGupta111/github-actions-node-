let chai=require("chai");
let chaiHttp=require("chai-http");
let server=require("./app");
let { expect } = require("chai");
const { listeners } = require("./app");
chai.should();
chai.use(chaiHttp);

describe("Get/LandingPage",()=>{

    it("it should display landing page",(done)=>{
        chai.request(server)
            .get("/")
            .end((err,res)=>{
                res.should.have.status(200);
                done();
            });
    });
});

describe("Get/Newsfeed",()=>{

    it("it should display newsfeed",(done)=>{
        chai.request(server)
            .get("/newsfeed")
            .end((err,res)=>{
                res.should.have.status(200);
                done();
            });
    });
});

describe("Get/SearchNewsPage",()=>{

    it("it should display search news page",(done)=>{
        chai.request(server)
            .get("/searchnews")
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
