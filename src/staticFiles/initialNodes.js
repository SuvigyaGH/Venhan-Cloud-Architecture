// initialNodes.js

export const initialNodes = [
    {
      id: "1",
      type: "default",
      data: { label: "API gateway", icon: "aws-api-gateway" },
      position: { x: 100, y: 150 },
      style: { backgroundColor: "lightblue" },
    },
    {
      id: "2",
      type: "default",
      data: { label: "Lambda", icon: "aws-lambda" },
      position: { x: 300, y: 150 },
      style: { backgroundColor: "lime" },
    },
    {
      id: "3",
      type: "default",
      data: { label: "Server", icon: "aws-ec2" },
      position: { x: 500, y: 150 },
      style: { backgroundColor: "violet" },
    },
    {
      id: "4",
      type: "default",
      data: { label: "Data", icon: "aws-rds" },
      position: { x: 700, y: 150 },
      style: { backgroundColor: "violet" },
    },
    {
      id: "5",
      type: "output",
      data: { label: "S3", icon: "aws-simple-storage-service" },
      position: { x: 900, y: 150 },
      style: { backgroundColor: "yellow" },
    },
    {
      id: "6",
      type: "default",
      data: { label: "Queue", icon: "aws-auto-scaling" },
      position: { x: 500, y: 300 },
      style: { backgroundColor: "lightgreen" },
    },
    {
      id: "7",
      type: "input",
      data: { label: "Compute Nodes", color: "red" },
      position: { x: 690, y: 400 },
      style: { backgroundColor: "bisque", zIndex: -1, width: 170, height: 330,fontFamily:'Poppins' },
    },
    {
      id: "8",
      type: "input",
      data: { label: "Worker1", icon: "aws-ec2" },
      position: { x: 700, y: 450 },
      style: { backgroundColor: "lightgray" },
    },
    {
      id: "9",
      type: "output",
      data: { label: "Worker2", icon: "aws-ec2" },
      position: { x: 700, y: 550 },
      style: { backgroundColor: "lightgray" },
    },
    {
      id: "10",
      type: "output",
      data: { label: "Worker3", icon: "aws-ec2" },
      position: { x: 700, y: 650 },
      style: { backgroundColor: "lightgray" },
    },
    {
      id: "11",
      type: "output",
      data: { label: "Analytics", icon: "aws-redshift" },
      position: { x: 950, y: 400 },
      style: { backgroundColor: "tomato" },
    },
    {
      id: "12",
      type: "output",
      data: { label: "VPC-Subnet", icon: "aws-subnet" },
      position: { x: 475, y: 80 },
      style: { backgroundColor: "lightgoldenrodyellow", zIndex: -2, width: 400, height: 700 },
    },
    {
      id: "13",
      type: "output",
      data: { label: "Main Server", icon: "main-server" },
      position: { x: 490, y: 110 },
      style: { backgroundColor: "lavender", zIndex: -1, width: 375, height: 150,fontFamily:'Poppins', textAlign: "end" },
    },
  ];
  

  