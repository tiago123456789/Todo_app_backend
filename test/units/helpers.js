import chai from "chai";
import app from "./../../src/configs/Server";

global.app = app;
global.expect = chai.expect;