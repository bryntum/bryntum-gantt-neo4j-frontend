import { Gantt, AssignmentField, ProjectModel } from "@bryntum/gantt";
import "./style.css";

const project = new ProjectModel({
  autoLoad: true,
  autoSync: true,
  transport: {
    load: {
      url: "load",
    },
    sync: {
      url: "sync",
    },
  },
});

const gantt = new Gantt({
  appendTo: "app",
  resourceImageFolderPath: "./users/",
  columns: [
    { type: "name", width: 250 },
    {
      type: "resourceassignment",
      width: 250,
      showAvatars: true,
      editor: {
        type: AssignmentField.type,
        picker: {
          height: 350,
          width: 450,
          features: {
            filterBar: true,
            group: "resource.city",
            headerMenu: false,
            cellMenu: false,
          },
          // The extra columns are concatenated onto the base column set.
          columns: [
            {
              text: "Calendar",
              // Read a nested property (name) from the resource calendar
              field: "resource.calendar.name",
              filterable: false,
              editor: false,
              width: 85,
            },
          ],
        },
      },
    },
  ],
  project: project,
});
