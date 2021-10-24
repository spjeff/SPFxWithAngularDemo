import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './SpFxWithAngularDemoWebPart.module.scss';
import * as strings from 'SpFxWithAngularDemoWebPartStrings';



import '../../../../SPFxWithAngularDemo/dist/SPFxWithAngularDemo/main.f827e8d95e740292b4e3.js';
import '../../../../SPFxWithAngularDemo/dist/SPFxWithAngularDemo/polyfills.f0eea84dbb74fa39aca4.js';
import '../../../../SPFxWithAngularDemo/dist/SPFxWithAngularDemo/runtime.96c0e6e3ba326e74a531.js';
// vendor.js
import '../../../../SPFxWithAngularDemo/dist/SPFxWithAngularDemo/scripts.6c900310e2ff2974eb05.js';
import '../../../../SPFxWithAngularDemo/dist/SPFxWithAngularDemo/styles.31d6cfe0d16ae931b73c.js';



export interface ISpFxWithAngularDemoWebPartProps {
  description: string;
}

export default class SpFxWithAngularDemoWebPart extends BaseClientSideWebPart<ISpFxWithAngularDemoWebPartProps> {

  public render(): void {

    this.domElement.innerHTML = '<app-spfx></app-spfx>';

    // this.domElement.innerHTML = `
    //   <div class="${ styles.spFxWithAngularDemo }">
    //     <div class="${ styles.container }">
    //       <div class="${ styles.row }">
    //         <div class="${ styles.column }">
    //           <span class="${ styles.title }">Welcome to SharePoint!</span>
    //           <p class="${ styles.subTitle }">Customize SharePoint experiences using Web Parts.</p>
    //           <p class="${ styles.description }">${escape(this.properties.description)}</p>
    //           <a href="https://aka.ms/spfx" class="${ styles.button }">
    //             <span class="${ styles.label }">Learn more</span>
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
