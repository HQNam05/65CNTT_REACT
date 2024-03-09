// RFC - React Functional Component

 export default function ChildComponent({number, name, increase, children}){
    //logic
    const componentName = 'ChildComponent';

    //destructoring

    //view
    return (
    <div>
        <h1>Xin chào tôi tên là: {componentName}.new</h1>
        <h3>
            Danh sách props của tôi là:
            <p>number: {number * 2}</p>
            <p>name: {name}</p>
        </h3>
        <div>
            <button className="btn btn-primary" onClick={increase}>
                +
            </button>
        </div>
        {children}
    </div>

    );
}
