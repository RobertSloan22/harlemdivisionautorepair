function AllData(){
  return(
    <div className="AllData-background">
      <video autoPlay loop muted style={{
        position: "absolute",
        width: "100%",
        left: "50%",
        top: "50%",
        height: "100%",
        objectFit: "cover",
        transform: "translate(-50%, -50%)",
        zIndex: "-1"
      }}>
        <source src="rotating.mp4" type="video/mp4" />
      </video>
      
      </div>
  );
}
