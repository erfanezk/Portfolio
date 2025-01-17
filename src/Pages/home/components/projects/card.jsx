import Typography from '@src/Components/typography';
import Button from '@src/Components/button';

function ProjectCard({ title, description, url }) {
  return (
    <div
      style={{ width: '350px', height: '700px' }}
      className="group cursor-pointer  border-4 border-gray-700  max-w-[350px] rounded-lg relative overflow-hidden"
    >
      <div
        style={{ bottom: '0px' }}
        className="bg-white z-50 p-4 space-y-4 rounded-t-xl absolute  left-0 w-full "
      >
        <Typography variant="h4" className="text-black">
          {title}
        </Typography>
        <Typography variant="body" className="text-black">
          {description}
        </Typography>
        <Button
          onClick={() => {
            window.open(url);
          }}
          className={'w-full'}
        >
          Visit Application
        </Button>
      </div>
      <div
        className={'absolute left-0 bottom-0 z-10 w-full h-full   bg-black/80'}
      />

      {/* Iframe Section */}
      <iframe
        title="External Site"
        src={url}
        width="100%" // Makes the iframe responsive, adjust as needed
        height="100%" // Set height as needed
        className=" overflow-hidden"
      />
    </div>
  );
}

export default ProjectCard;
