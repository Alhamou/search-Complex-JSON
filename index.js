let search = []
const object = [
    {
        key: "some key1",
        value: "some value",
        child: {
            key: "some key2",
            value: "some value",
            child: {
                key: "some key3",
                value: "some value",
                child: {
                    key: "some key4",
                    value: "some value",
                    child: {
                        key: "some key5",
                        value: "some value",
                        child: {
                            key: "some key6",
                            value: "some value",
                            child: {
                                array: [
                                    {
                                        key: "some key7",
                                        value: "some value",
                                        child: {
                                            key: "some key8",
                                            value: "some value",
                                            child: {
                                                key: "some key9",
                                                value: "some value"
                                            }
                                        }
                                    },
                                    {
                                        key: "some key10",
                                        value: "some value",
                                        child: {
                                            key: "some key11",
                                            value: "some value",
                                            emad: "this is a test for emad key",
                                            child: {
                                                key: "some key12",
                                                value: "some value"
                                            }
                                        }
                                    }]
                                }
                            }
                        }
                    }
                }
            }
        }

]


const getContent = function(obj, key){

    if(obj.hasOwnProperty(key))
        search.push(obj[key])

    obj = Array.isArray(obj) ? obj : [obj]

    for(let i of obj){

        for(let k of Object.keys(i)){

            if(typeof i[k] === "object") getContent(i[k], key)

        }
    }
}

getContent(object, "emad")
console.log(search)
