import React, {Suspense, useState} from 'react';
import './styles.css';

const ComponentA = React.lazy(() => import('./ComponentA'));

function App() {
    const [showComponent, setShowComponent] = useState();

    return (
        <div className="App">
            <h2>Let's make some magic!</h2>
            <button onClick={()=>setShowComponent(true)}>Show Component</button>
            <Suspense fallback={<div>Loading...</div>}>
                {showComponent && <ComponentA/>}
            </Suspense>
        </div>
    );
}

export default App;
