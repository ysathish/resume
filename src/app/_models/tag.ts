export class Tag{
    static readonly Angular=new Tag('angular','green');
    static readonly Java=new Tag('java','red');
    static readonly Python=new Tag('python','blue');
    static readonly Web=new Tag('web','orange');
    static readonly Typescript=new Tag('web','orange');
    constructor(private readonly key:string,
                public readonly color:string){}

        toString(){
            return this.key;
        }
}