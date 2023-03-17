import { Panel } from 'primereact/panel';
import './styles.css';

export const PrimeComponent = () => {
  return (
    <div>
      <h4>PrimeComponent</h4>
      <Panel header='Named ClassName' className='mypanel'>
        <p>Ejemplo de Panel con clase propia mypanel</p>
      </Panel>
    </div>
  );
};
