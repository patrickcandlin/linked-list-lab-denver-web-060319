function getName(node){
    return node['name']
}

function headNode(linkedList, collection){
    return collection[linkedList]
}

function next(head, collection){
    return collection[head['next']]
}

function nodeAt(location, linkedList, collection){
    let node = headNode(linkedList, collection)
    for(let i=0; i < location; i++){
        node = next(node, collection)
    }
    return node
}

function addressAt(location, linkedList, collection){
    let memory = ''
    let addresses = Object.keys(collection)
    const targetNode = nodeAt(location, linkedList, collection)
    addresses.map(address => {
        if(collection[address] === targetNode){
            memory = address
        }
    })

    return memory

}

function indexAt(node, collection, linkedList){
    let location = 0
    while(node !== nodeAt(location, linkedList, collection)){
         location++
    }
    return location
}

function insertNodeAt(location, id, linkedList, collection){
    collection[id]['next'] = addressAt(location, linkedList, collection) 
    nodeAt(location-1, linkedList, collection)['next'] = id
    return collection
}
function deleteNodeAt(location, linkedList, collection){
    let nodeToDelete = addressAt(location, linkedList, collection) 
    let newNext = addressAt(location+1, linkedList, collection)
    let beforeNewNext = nodeAt(location-1, linkedList, collection)
    beforeNewNext.next = newNext
    delete collection[nodeToDelete] 
    return collection

}