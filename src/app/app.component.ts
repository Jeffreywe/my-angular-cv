import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jeffrey Evans';
  gStrengths = "Empathy, Adaptability, Developer, Restorative, Responsibility";
  info = "Cincinnati, OH, 45205 (513) 491-5465, jevans_coder@outlook.com";
  
  techtr:any[] = [
    { a: "Git | GitHub", b:"NET Core", c:"HTML", d:"JSON", e:"ASP.Net", f:"jQuery" },
    { a: "C#", b:"Bootstrap", c:"MySQL", d:"REST", e:".Net", f:"Scrum" },
    { a: "CSS", b:"Typescript", c:"WebApi", d:"Maven", e:"Eclipe", f:"Angular" },
    { a: "SQL", b:"Java", c:"Javascript", d:"Agile/Scrum", e:"Hibernate", f:"SQL Server Manager (SSMS)" },
    { a: "Spring", b:"Entity Framework Core", c:"SQL Server", d:"Visual Studio 2019", e:"", f:"" }
  ]

  techtr1:any[] = [
    { name: "Git | GitHub" },
    { name: "NET Core" },
    { name: "HTML" },
    { name: "JSON" },
    { name: "ASP.Net" },
    { name: "jQuery" }
  ]
  techtr2:any[] = [
    { name: "C#" },
    { name: "Bootstrap" },
    { name: "MySQL" },
    { name: "REST" },
    { name: ".Net" },
    { name: "Scrum" }
  ]
  techtr3:any[] = [
    { name: "CSS" },
    { name: "Typescript" },
    { name: "WebApi" },
    { name: "Maven" },
    { name: "Eclipe" },
    { name: "Angular" }
  ]
  techtr4:any[] = [
    { name: "SQL" },
    { name: "Java" },
    { name: "Javascript" },
    { name: "Agile/Scrum" },
    { name: "Hibernate" },
    { name: "(SSMS)" }
  ]
  techtr5:any[] = [
    { name: "Spring" },
    { name: "Entity Framework Core" },
    { name: "SQL Server" },
    { name: "Visual Studio" },
    { name: "" }
  ]
}