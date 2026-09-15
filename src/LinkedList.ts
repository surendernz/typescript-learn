class ListNode<T>{
    next?: ListNode<T>;
    constructor(public value:T) {}
}
class LinkedList<T>{
    private root?: ListNode<T>;
    private tail?: ListNode<T>;
    private length = 0;
    add(value:T){
        const node = new ListNode(value);
        if(!this.root){
            this.root = node;
            this.tail = node;
        }else{
            this.tail!.next = node;
            this.tail = node;
        }
        this.length++;
    }
    getNumberOfElements(){
        return this.length;
    }
    print(){
        let current = this.root;
        while(current){
            console.log(`val: ${current.value}`);
            current = current.next;
        }
    }
    removeFirst(){
        this.root=this.root?.next;
    }
    removeLast(){
        if (!this.root) {
            return;
        }

        if (!this.root.next) {
            this.root = undefined;
            this.tail = undefined;
            this.length = 0;
            return;
        }

        let current = this.root;
        while (current.next?.next) {
            current = current.next;
        }

        current.next = undefined;
        this.tail = current;
        this.length--;
    }
}



const numberList = new LinkedList<number>();
numberList.add(33);
console.log('-->' + numberList.getNumberOfElements());
//numberList.print();
numberList.add(44);

numberList.removeFirst();
numberList.print();
numberList.add(55);
numberList.print();

numberList.removeLast();
numberList.print();
const nameList = new LinkedList<string>();
