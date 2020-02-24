import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projectsUrl = 'https://server-30-x-30.herokuapp.com/projects';

  constructor(private httpClient: HttpClient) { }

  all(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.projectsUrl)
  }

  findOne(projectId: string): Observable<Project> {
    return this.httpClient.get<Project>(this.projectsUrl + '/' + projectId);
  }

  create(project: Project): Observable<Project> {
    return this.httpClient.post<Project>(this.projectsUrl, project);
  }

  update(project: Project): Observable<Project> {
    return this.httpClient.patch<Project>(this.projectsUrl, project);
  }

  delete(project: Project): Observable<{}> {
  return this.httpClient.delete<{}>(this.projectsUrl + '/' + project.id)
  }

}
