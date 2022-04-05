import ToggleComponent from './ToggleComponent'
import Enzyme, {shallow} from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// Enzyme.configure({ adapter: new Adapter() });

 
      
  


describe('ToggleComponent', () => { 

      it('should show the text', () => {
            const toggleInstance = shallow(<ToggleComponent />);
            const element = toggleInstance.find('div div');
            expect(element.text()).toBe('This will be toggled');


      });
    


      it('Should be true', () => {     
           const test = true;  
           expect(test).toBe(true);
     
        })


    it('Trainer Test', () =>     {   
          const trainer = 'Shubham';  
           expect(trainer).toBe('Shubham');});

      it('Addition',()=>{
            const add = 10 + 2;            
            expect(add).toBe(12);
      })

;});


