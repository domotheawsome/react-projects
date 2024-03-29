import React from "react"

let nextId = 0;

export default function ColorFlipper() {
    const [item, setItem] = React.useState('')
    const [itemArray, setItemArray] = React.useState([])

        // button css:

        // className="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded scale-150"

    const displayItem = itemArray.map(item => { 
        return (<li className="button--style" key={item.nextId}>{item.item}{' '}<button className="button--delete" onClick={() => deleteItem(item)}>
        Delete</button></li>)})


    function addItem () {
            setItem('')
            setItemArray([...itemArray, { nextId: nextId++, item: item }])
    }
        
    function deleteItem(item) {
            setItemArray(itemArray.filter(i => (i.nextId!==item.nextId)))
    }
   
    return(
        <div className="flex flex-col flex-shrink-0 ml-20">
            <p>Add a task:</p>
            <div className="py-6">
                <input className="form-control text-base bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
        
                value={item} onChange={e => setItem(e.target.value)} />

                <button className="ml-3 mb-6" onClick={addItem}>{console.log(itemArray)}Add</button>

                <ul>{displayItem}</ul>

            </div>
        </div>
    )
}

/*
value={item} onChange={e => setItem(e.target.value)} />
                <button  onClick={() => {
                setItem('');
                setItemArray([
                    ...itemArray,
                    { id: nextId++, item: item }

                ])}}>Add</button>

                <ul>
                    {itemArray.map(i=> (
                        <li className="list-disc"key={i.id}>{i.item}</li>
                    ))}
                </ul>
*/