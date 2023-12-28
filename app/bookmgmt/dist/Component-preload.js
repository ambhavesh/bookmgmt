//@ui5-bundle bookmgmt/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"bookmgmt/Component.js":function(){sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("bookmgmt.Component",{metadata:{manifest:"json"}})});
},
	"bookmgmt/i18n/i18n.properties":'# This is the resource bundle for bookmgmt\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Manage Book\n\n#YDES: Application description\nappDescription=A Fiori application.\n\nflpTitle=Manage Book\n',
	"bookmgmt/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"bookmgmt","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.11.5","toolsId":"33a9b7c1-ab23-40d9-8082-8990ffdc147d"},"dataSources":{"mainService":{"uri":"odata/","type":"OData","settings":{"annotations":[],"localUri":"localService/metadata.xml","odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"book-manage":{"semanticObject":"book","action":"manage","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.120.1","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"bookmgmt.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"BooksList","target":"BooksList"},{"pattern":"Books({key}):?query:","name":"BooksObjectPage","target":"BooksObjectPage"}],"targets":{"BooksList":{"type":"Component","id":"BooksList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/Books","variantManagement":"Page","navigation":{"Books":{"detail":{"route":"BooksObjectPage"}}}}}},"BooksObjectPage":{"type":"Component","id":"BooksObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/Books"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"bkshpar"}}'
}});
