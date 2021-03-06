export interface Note {
    note_title: string;
    id: number;
    user_id: string;
    note_text: string;
    timestamp: Date;
  }
  
export enum scrollToEnum {
  SKILLS = 'skillsTarget',
  PROJECTS = 'projectsTarget',
  SERVICES = 'servicesTarget',
}
  