const mainUserName = 'Surender';

const greet = `Hi ${mainUserName}`;

console.log(greet);

type ReadPermissions = 'no-read' | 'read';
type WritePermissions = 'no-write' | 'write';

type FilePermissions = `${ReadPermissions}-${WritePermissions}`


type DataFile = {
    data:string,
    permission: FilePermissions,
}

type DataFileEventNames =`${keyof DataFile}Changed`;

type DataFileEvents = {
    [Key in DataFileEventNames]: ()=> void;
}

const events: DataFileEvents = {
    dataChanged:()=>{
        console.log('Data Changed');
    },
    permissionChanged:()=>{
        console.log('Permission Changed');
    }
}

let df : DataFile = {
    data : 'data1',
    permission : 'read-write',
};

console.log(df);

df.data = 'data2';
df.permission = 'read-no-write';

events.dataChanged();
events.permissionChanged();
