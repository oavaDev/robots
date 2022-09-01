const {createRobot} = require('./index.js');

describe('Should be inside its limits ', ()=>{
    it('should not go any further than [0,0] or [10,10]', ()=>{
        const {moveForward} = createRobot(5,10);
        expect(moveForward()).toBe("Out of bounds");
    });
});


describe('Should rotate correctly', ()=>{
    it('should turn right', ()=>{
        const {turnRight} = createRobot(5,5);
        expect(turnRight()).toBe("E");
    });
    it('should turn left', ()=>{
        const {turnLeft} = createRobot(5,5);
        expect(turnLeft()).toBe("W");
    });
});

describe('Should move forward', ()=>{
    it('should increment y value', ()=>{
        const {moveForward} = createRobot(5,5);
        expect(moveForward()).toBe(5);
        expect(moveForward()).toBe(6);
    });
});
