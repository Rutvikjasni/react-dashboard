import CourseCard from "../Components/CourseCard";
// import courseImage from "../assets/image.png";

interface Course {
  id: number;
  title: string;
  code: string;
  semester: string;
  status: string;
  color: string;
  favorite: boolean;
}

const courses: Course[] = [
  {
    id: 1,
    title: "Lorem Ipsum is simply dummy",
    code: "IT-229-OLA3",
    semester: "Summer 2020",
    status: "Open",
    color: "bg-blue-500",
    favorite: false,
  },
  {
    id: 2,
    title: "Lorem Ipsum is simply dummy",
    code: "IT-229-OLA3",
    semester: "Summer 2020",
    status: "Closed",
    color: "bg-red-500",
    favorite: false,
  },
];


const Dashboard: React.FC = () => {
 


  return (
    <div className="mt-2 border border-gray-200 rounded-lg h-full">
      <div className="border-b-2 flex p-4 mx-4 border-gray-300 ">
          <h4>Dashboard</h4>
          <div className="ml-auto flex gap-x-2"> 
            <span>hello</span>
            <span>hello23</span>

             </div>
      </div>
  <div className="pl-4 py-4 pr-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
     
     <CourseCard
     imageUrl="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
     badgeText="Summer 2020"
     title="Lorem Ipsum is simply dummy"
     id="IT-229-OLA3"
     onLike={() => console.log('Liked!')}
     onShare={() => console.log('Shared!')}
     onSave={() => console.log('Saved!')}
     onMore={() => console.log('More!')}
   />
     <CourseCard
     imageUrl="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
     badgeText="Summer 2020"
     title="Lorem Ipsum is simply dummy"
     id="IT-229-OLA3"
     onLike={() => console.log('Liked!')}
     onShare={() => console.log('Shared!')}
     onSave={() => console.log('Saved!')}
     onMore={() => console.log('More!')}
   />  <CourseCard
   imageUrl="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
   badgeText="Summer 2020"
   title="Lorem Ipsum is simply dummy"
   id="IT-229-OLA3"
   onLike={() => console.log('Liked!')}
   onShare={() => console.log('Shared!')}
   onSave={() => console.log('Saved!')}
   onMore={() => console.log('More!')}
 />  <CourseCard
 imageUrl="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
 badgeText="Summer 2020"
 title="Lorem Ipsum is simply dummy"
 id="IT-229-OLA3"
 onLike={() => console.log('Liked!')}
 onShare={() => console.log('Shared!')}
 onSave={() => console.log('Saved!')}
 onMore={() => console.log('More!')}
/>  <CourseCard
imageUrl="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
badgeText="Summer 2020"
title="Lorem Ipsum is simply dummy"
id="IT-229-OLA3"
onLike={() => console.log('Liked!')}
onShare={() => console.log('Shared!')}
onSave={() => console.log('Saved!')}
onMore={() => console.log('More!')}
/>  <CourseCard
imageUrl="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
badgeText="Summer 2020"
title="Lorem Ipsum is simply dummy"
id="IT-229-OLA3"
onLike={() => console.log('Liked!')}
onShare={() => console.log('Shared!')}
onSave={() => console.log('Saved!')}
onMore={() => console.log('More!')}
/>
 
</div>
    </div>
  
  );
};

export default Dashboard;

