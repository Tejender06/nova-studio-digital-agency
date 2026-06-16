import {NextResponse} from 'next/server';

export async function GET(){
    const services =  [
        {
            id:1,
            title:"Web Design",
            description:'Creating modern ans responsive website design.',
        },
        {
            id:2,
            title:'Frontend Development',
            description:'Building fast and interactive user friendly interfaces using React.',
        },
        {
            id:3,
            title:'Branding',
            description:'Creating a stronga and memorable digital identity.',
        }
    ];
    return NextResponse.json(services,{
        status:200,
    });
}