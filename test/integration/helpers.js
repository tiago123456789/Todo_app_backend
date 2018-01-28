import request from "supertest";
import sinon from "sinon";
import assert from "chai";
import app from "./../../src/config/Server";

global.request = request;
global.sinon = sinon;
global.app = app;
global.assert = assert;