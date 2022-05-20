class Widgets {

  getSaveLayout () {
    return cy.get('.ItgCmsPage-saveLayout');
  }

  getClearLayoutButton () {
    return cy.get('.ItgCmsPage-clearLayout');
  }

  getWidgetPanel () {
    return cy.get('.ItgCmsPageToolkit-container');
  }

  getWidgetPanelTitle () {
    return cy.get('.ItgCmsPageToolkit-title');
  }

  getWidget () {
    return cy.get('.ItgToolbarWidget-container');
  }

  getblankArea () {
    return '.ItgSectionWidget-column';
  }

  getWidgetPanelCloseBtn () {
    return cy.get('.ItgCmsPageToolkit-closeButton');
  }

  getWidgetSettingsBtn () {
    return cy.get(':nth-child(1) > .ItgActiveWidget > .ItgActiveWidget-container > .ItgActiveWidget-buttons > .ItgActiveWidget-button');
  }

  getEditingSectionPanel () {
    return cy.get('.ItgCmsPage-widgetSettings');
  }

  getEditingSectionPanelHeader () {
    return cy.get('.ItgWidgetSettings-header');
  }

  getActiveWidgetTitle () {
    return cy.get(':nth-child(1) > .ItgActiveWidget > .ItgActiveWidget-container > .ItgActiveWidget-header > .ItgActiveWidget-title');
  }

  getWidgetTitleField () {
    return cy.get('[formcontrolname=title]');
  }

  getActiveWidget () {
    return cy.get('itg-active-widget[class*="is-active"]');
  }

  getConfigWidth () {
    return cy.get('.ItgWidgetSettings-widthField > .ItgWidgetSettings-inputContainer > .mat-slider');
  }

  getWidgets () {
    return cy.get('.ItgActiveWidget');
  }

  getSectionWidget () {
    return cy.get('.ItgSectionWidget-activeWidget > .ItgActiveWidget-container');
  }

  getWidgetSpacingSlider () {
    return cy.get('.ItgWidgetSettings-spacingSlider > label > .ItgWidgetSettings-inputContainer > .mat-slider');
  }

  getBasket () {
    return cy.get('.ItgToolbar-basket');
  }

  getSnackBarRemoveButton () {
    return cy.get('.ItgBasketSnackbarButtons-removeButton');
  }

  getButtonButtonStyleRadioButton () {
    return cy.get('[id=mat-radio-2-input]');
  }

  getOpenInTabCheckBox () {
    return cy.get('#mat-checkbox-1-input');
  }

  getFilterSettings () {
    return cy.get('itg-resource-list-filters-settings');
  }

  getSnackbar () {
    return cy.get('.ItgAssetSnackbar-label');
  }

  getDestinationUrlInput () {
    return cy.get('[formcontrolname=url]');
  }

  getSearchOption () {
    return cy.get('.mat-option-text');
  }

  getDomainOption () {
    return cy.get('.ItgDomainDropdown-menuButton');
  }

  getAssetLibraryButton () {
    return cy.get('.ItgHome-menu > .ItgMenu-container > .ItgMenu-nav > .ItgMenu-nodeContainer > :nth-child(2) > .ItgMenu-nodeLink');
  }

  getDomain () {
    return cy.get('.mat-menu-content');
  }

  getWidgetTextInput () {
    return cy.get('[formcontrolname="text"]');
  }

  getWidgetAlignment () {
    return '[aria-label="value"]';
  }

  getFontSizeSlider () {
    return cy.get('.ItgHeadingWidgetSettings-fontSizeField > .mat-slider');
  }

  getBoldFontButton () {
    return cy.get('#mat-button-toggle-10-button');
  }

  getItalicFontButton () {
    return cy.get('#mat-button-toggle-11-button');
  }

  getUnderlineFontButton () {
    return cy.get('#mat-button-toggle-12-button');
  }

  getHeadingWidgetContent () {
    return cy.get('.ItgHeadingWidget-content');
  }

  getResourceListWidgetCount () {
    return cy.get('.ItgResourceListWidget-count');
  }

  getResourceListSearchInput () {
    return cy.get('.ItgResourceListSearch-searchInput');
  }

  getListCheckBox () {
    return cy.get('#mat-radio-3');
  }

  getGridCheckBox () {
    return cy.get('#mat-radio-2');
  }

  getAssetsInGrid () {
    return cy.get('.ItgResourceListResultGrid-previewContainer');
  }

  getAssetCheckboxes () {
    return cy.get('.mat-checkbox-input');
  }

  getSelectVisibleIcon () {
    return cy.get('.ItgResourceListWidget-selectVisible');
  }

  getAssetsInList () {
    return cy.get('.ItgResourceListResultTable-container');
  }

  getAssetName () {
    return cy.get('.ItgResourceListDetailLink-resultName');
  }

  getAsset () {
    return cy.get('.mat-checkbox-layout > .mat-checkbox-inner-container');
  }

  getPeriodFilter () {
    return cy.get('.ItgResourceListPeriodFilter-container');
  }

  getPeriodStartDate () {
    return cy.get('[placeholder="Start date"]');
  }

  getInstantField () {
    return cy.get('[formcontrolname="instant"]');
  }

  getInstantDropdown () {
    return cy.get('[id="mat-select-6-panel"]');
  }

  getPeriodEndDate () {
    return cy.get('[placeholder="End date"]');
  }

  getAssetProperties () {
    return cy.get('.mat-chip');
  }

  getListBox () {
    return cy.get('[role="listbox"]');
  }

  getAssetPropertiesClear () {
    return cy.get('#mat-chip-list-0 > .mat-chip-list-wrapper > .mat-chip > .mat-icon');
  }

  getAssetType () {
    return cy.get('.ItgResourceListResultGrid-subTitle');
  }

  getAssetDetailsType () {
    return cy.get('.ItgAssetDetails-type');
  }

  getAssetPreview () {
    return cy.get('.ItgGizaViewer-frame');
  }

  getAssetNameInList () {
    return cy.get('.ItgResourceListDetailLink-resultName');
  }

  getAssetTypeInList () {
    return cy.get('.cdk-column-type');
  }

  getPaginationPaginationStyleRdo () {
    return cy.get('#mat-radio-7 > .mat-radio-label');
  }

  getPagination () {
    return cy.get('#mat-radio-7');
  }

  getLoadMorePaginationStyleRdo () {
    return cy.get('#mat-radio-5 > .mat-radio-label');
  }

  getLoadMorePaginationStyle () {
    return cy.get('[id=mat-radio-5]');
  }

  getInfiniteScrollPaginationStyleRdo () {
    return cy.get('#mat-radio-6 > .mat-radio-label');
  }

  getResultsPerPageDropdown () {
    return cy.get('[formcontrolname=pageSize]');
  }

  getResultsPerPageValues () {
    return '#mat-option-value > .mat-option-text';
  }

  getResourceListColumns () {
    return cy.get('tr > th');
  }

  getPaginatorFirst () {
    return  cy.get('.mat-paginator-navigation-first');
  }

  getPaginatorLast () {
    return cy.get('.mat-paginator-navigation-last');
  }

  getPaginatorPrev () {
    return  cy.get('.mat-paginator-navigation-previous');
  }

  getPaginatorNext () {
    return  cy.get('.mat-paginator-navigation-next');
  }

  getSortDirectionBtn () {
    return cy.get('.ItgResourceListSorter-direction');
  }

  getIncludeSubDomains () {
    return cy.get('[formcontrolname=subDomains]');
  }

  getIncludeParentDomains () {
    return cy.get('[formcontrolname=inheritDomains]');
  }

  getSortOption () {
    return cy.get('.ItgResourceListSorter-label .mat-button-wrapper');
  }

  getSortOptions () {
    return cy.get('.ItgResourceListSorter-label');
  }

  getSortButton () {
    return cy.get('.mat-menu-content > button');
  }

  getPaginationStyle () {
    return cy.get('mat-radio-group[formcontrolname="paginationStyle"]');
  }

  getSortOptionList () {
    return cy.get('.cdk-overlay-pane div[role="menu"]');
  }

  getActiveSortOption () {
    return cy.get('.ItgResourceListSorter-activeOption');
  }

  getLoadMoreBtn () {
    return cy.get('.ItgResourceListWidget-loadMore .mat-button-wrapper');
  }

  getSnackBar () {
    return cy.get('.ItgAssetSnackbar-container');
  }

  getBackToTopBtn () {
    return cy.get('.ItgScrollTop-container > .mat-focus-indicator');
  }

  getKeywordFilterBtn () {
    return cy.get('.ItgResourceListKeywordFilter-panel');
  }

  getDomainFilterBtn () {
    return cy.get('itg-resource-list-domain-filter [role="button"]');
  }

  getStateFilterBtn () {
    return cy.get('itg-resource-list-state-filter [role="button"]');
  }

  getApprovedFilterCheckbox () {
    return cy.get('.mat-pseudo-checkbox');
  }

  getApprovedButton () {
    return cy.get('.mat-list-text');
  }

  getTypesFilterBtn () {
    return cy.get('itg-resource-list-types-filter [role="button"]');
  }

  getClearAllButton () {
    return cy.get('.ItgResourceListSearch-clearAll');
  }

  getAdaptorFilterBtn () {
    return cy.get('itg-resource-list-adaptor-filter [role="button"]');
  }

  getPhaseFilterBtn () {
    return cy.get('itg-resource-list-phase-filter [role="button"]');
  }

  getKeywordFilterSubMenu () {
    return cy.get('.ItgResourceListKeywordFilter-subPanel .mat-list-text');
  }

  getDomainFilterSubMenu () {
    return cy.get('itg-resource-list-domain-filter .mat-list-text');
  }

  getStateFilterSubMenu () {
    return cy.get('itg-resource-list-state-filter .mat-list-text');
  }

  getTypesFilterSubMenu () {
    return cy.get('itg-resource-list-types-filter .mat-checkbox-label');
  }

  getKeyWordsMenuText () {
    return cy.get('.mat-expansion-panel-header-title');
  }

  getKeyWordsMenu () {
    return cy.get('.ItgResourceListKeywordFilter-subPanel');
  }

  getAdaptorFilterSubMenu () {
    return cy.get('itg-resource-list-adaptor-filter mat-list-option');
  }

  getPhaseFilterMenu () {
    return cy.get('.ItgResourceListPhaseFilter-label');
  }

  getDropdownOverlay () {
    return cy.get('.cdk-overlay-pane .mat-menu-item');
  }

  getAppliedFilters () {
    return cy.get('[aria-labelledby="appliedFilters"]');
  }

  getCancelAppliedFilters () {
    return cy.get('[aria-labelledby="appliedFilters"] > .mat-icon');
  }

  getShowKeyWordCount () {
    return cy.get('.ItgResourceListWidgetSettings-keywordSettings [formcontrolname="showCount"]');
  }

  getAppliedFilterText () {
    return cy.get('#appliedFilters');
  }

  getAppliedFiltersArea () {
    return cy.get('[aria-label="appliedFilters"]');
  }

  getMultiSelectAdaptorFilter () {
    return cy.get('.ItgResourceListWidgetSettings-adaptorSettings [formcontrolname="multiple"]');
  }

  getAdaptorLabel () {
    return cy.get('input[data-placeholder="Adaptors"]');
  }

  getPhaseLabel () {
    return cy.get('input[data-placeholder="Phase"]');
  }

  getSpinnerLabel () {
    return cy.get('#spinnerLabel');
  }

  getAssetDetailTitle () {
    return cy.get('.ItgAssetDetails-name');
  }

  getPaginatorRangeLabel () {
    return cy.get('.mat-paginator-range-label');
  }
}

export default Widgets;