import React, { useState } from 'react'

const Todo = () => {

    const [items, setItems] = useState({ title: '', topic: '', duration: '' });
    const [enter, setEnter] = useState([]);

    const handleInputs = (e) => {

        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);

        setItems({ ...items, [name]: value });
    }

    const handleButton = (e) => {
        e.preventDefault();
        if (items.title && items.topic && items.duration) {
            const add = { ...items, id: new Date().getTime().toString() }
            setEnter([...enter, add]);
            setItems({ title: '', topic: '', duration: '' })
        }
    }

    return (

        <>
            <article>
                <form>
                    <div>
                        <label htmlFor='title'> Title : </label>
                        <input type='text'
                            name="title"
                            id='title'
                            value={items.title}
                            onChange={handleInputs} />
                    </div>

                    <div>
                        <label htmlFor='topic'> Topic : </label>
                        <input type='text'
                            name="topic"
                            id='topic'
                            value={items.topic}
                            onChange={handleInputs} />
                    </div>

                    <div>
                        <label htmlFor='duration'> Duration : </label>
                        <input type='text'
                            name="duration"
                            id='duration'
                            value={items.duration}
                            onChange={handleInputs} />
                    </div>
                    <button type="button" onClick={handleButton}>Add</button>
                </form>
                {enter.map((item) => {
                    console.log(item);
                    const { id, title, topic, duration } = item;
                    return (
                        <div key={id}>
                            <h4> Title : {title}</h4>
                            <p>Topic : {topic}</p>
                            <p>Duration Work :{duration}</p>
                        </div>
                    );
                }

                )}

            </article>
        </>
    )
}

export default Todo
